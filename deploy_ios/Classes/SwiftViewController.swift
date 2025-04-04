//
//  SwiftViewController.swift
//  playclips
//
//  Created by Sanjay Patni on 08/04/23.
//

import UIKit
import SwiftUI
import StoreKit

@available(iOS 15.0, *)
class SwiftViewController: PlayclipsViewController {

    var rbutton: UIButton = UIButton()
    var lbutton: UIButton = UIButton()
    @StateObject var viewModel = ViewModel()
    override func viewDidLoad() {
        
        
        
        super.viewDidLoad()
        
        
        
        view.backgroundColor = .black

                

                let button = UIButton()
                button.setTitleColor(.black, for: .normal)
                button.setTitle("™©Playclips", for: .normal)
                button.titleLabel?.textAlignment = .center
                button.translatesAutoresizingMaskIntoConstraints = false
                button.addTarget(self, action:  #selector(openSwiftUIScreen), for: .touchUpInside)
                view.addSubview(button)
                
               
                
                lbutton.setImage(UIImage(systemName: "arrow.counterclockwise.circle"), for: .normal)
                lbutton.setTitle("", for: .normal)
                lbutton.titleLabel?.textAlignment = .left
                lbutton.translatesAutoresizingMaskIntoConstraints = false
                lbutton.addTarget(self, action:  #selector(restorePurchase), for: .touchUpInside)
                view.addSubview(lbutton)
        
                // lbutton.isHidden = true
        
        
               
                rbutton.setImage(UIImage(systemName: "dollarsign.circle"), for: .normal)
                rbutton.setTitle("", for: .normal)
                rbutton.titleLabel?.textAlignment = .left
                rbutton.translatesAutoresizingMaskIntoConstraints = false
                rbutton.addTarget(self, action:  #selector(purchaseLifetime), for: .touchUpInside)
                view.addSubview(rbutton)
        
        
        NSLayoutConstraint.activate([
            button.centerXAnchor.constraint(equalTo: view.centerXAnchor, constant: 0.0),
                    button.topAnchor.constraint(equalTo: view.topAnchor, constant: 40.0)
                    ])
        
        NSLayoutConstraint.activate([
            lbutton.centerXAnchor.constraint(equalTo: button.centerXAnchor, constant: 70.0),
                    lbutton.topAnchor.constraint(equalTo: button.topAnchor, constant: 0.0)
                    ])
        
        NSLayoutConstraint.activate([
            rbutton.centerXAnchor.constraint(equalTo: button.centerXAnchor, constant: -60.0),
                    rbutton.topAnchor.constraint(equalTo: button.topAnchor, constant: 0.0)
                    ])
                  
        }
        // Do any additional setup after loading the view.
    
    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */
    
    @objc func openSwiftUIScreen() {
        if #available(iOS 15.0, *) {
            let swiftUIViewController = UIHostingController(rootView: SwiftUIView())
            view.addSubview(swiftUIViewController.view)
            swiftUIViewController.view.center = view.center
            // viewModel.fetchProducts()
            print(UUID().uuidString)
            print(UIDevice.current.identifierForVendor!)
        } else {
            // Fallback on earlier versions
        }
        
        }
    
    @objc func restorePurchase()  {
        Task {
            await viewModel.redeemStoreKitPurchases()
        }
    }
    @objc func purchaseLifetime()  {
        viewModel.fetchLifetimeProducts()
        if ( viewModel.purchased) {
            rbutton.isHidden = true
            lbutton.isHidden = false
        }
    }
}
@available(iOS 15.0, *)
class ViewModel: ObservableObject {
    @Published var products: [Product] = []
    @Published var product: Product?
    @Published var purchased : Bool = false
    
    func redeemStoreKitPurchases() async {
        do {
            try await StoreKit.AppStore.sync()
        } catch {
            print(error)
        }
    }
    
    func fetchLifetimeProducts() {
        async {
            let products = try await Product.products(for: ["lifetime"])
            if ( products.count > 0 ) {
                print(products.first!)
                product = products.first!
                await purchaseLifetime()
            }
        }
    }
    
    @available(iOS 15.0, *)
    func purchaseLifetime() async {
        do {
            let result = try await product?.purchase()
            switch result {
                case let .success(.verified(transaction)):
                    // Successful purhcase
                    await transaction.finish()
                    await subscribe()
                    purchased = true
                case let .success(.unverified(_, error)):
                    // Successful purchase but transaction/receipt can't be verified
                    // Could be a jailbroken phone
                    break
                case .pending:
                    // Transaction waiting on SCA (Strong Customer Authentication) or
                    // approval from Ask to Buy
                    break
                case .userCancelled:
                    // ^^^
                    break
                @unknown default:
                    break
            }
        }
        catch {
            print(error)
        }
    }
    
    func subscribe() async {
        Task {
            guard let url =  URL(string: "https://core4ed.com/api/authenticate")
            else{
                return
            }
            let userData = UserModel( username: "assets/img/demo.png", password: "1234" )
            let jsonData = try JSONEncoder().encode(userData)
            var request = URLRequest(url: url)
            request.httpMethod = "POST"
            request.httpBody = jsonData
            request.setValue("application/json", forHTTPHeaderField: "Accept")
            request.setValue("application/json", forHTTPHeaderField: "Content-Type")
            
            URLSession.shared.dataTask(with: request){
                (data, response, error) in
                print(response as Any)
                if let error = error {
                    print(error)
                    return
                }
                guard let data = data else{
                    return
                }
                print(data, String(data: data, encoding: .utf8) ?? "*unknown encoding*")
                
                // let jsonData = String(data: data, encoding: .utf8)!
                let jwt: Jwt = try! JSONDecoder().decode(Jwt.self, from: data)
                
            }.resume()
            let uuid = await UIDevice.current.identifierForVendor!.uuidString
            print(uuid)
            Task {
                guard let url =  URL(string: "https://core4ed.com/content/subscription")
                else{
                    return
                }
                let subData = Subscription(subscription : "lifetime", username : uuid,  email: uuid, nsclips: 50, cnclips: 0 , uuid : uuid)
                let subJsonData = try JSONEncoder().encode(subData)
                
                var request = URLRequest(url: url)
                request.httpMethod = "POST"
                request.httpBody = subJsonData
                request.setValue("application/json", forHTTPHeaderField: "Accept")
                request.setValue("application/json", forHTTPHeaderField: "Content-Type")
                // request.setValue( "Bearer \(jwt.token)", forHTTPHeaderField: "Authorization")
                
                URLSession.shared.dataTask(with: request){
                    (data, response, error) in
                    print(response as Any)
                    if let error = error {
                        print(error)
                        return
                    }
                    guard let data = data else{
                        return
                    }
                    print(data, String(data: data, encoding: .utf8) ?? "*unknown encoding*")
                }.resume()
            }
        }
    }
}
    
    struct Jwt: Decodable {
        let token: String
    }
    struct Subscription: Codable  {
        let subscription: String
        let username: String
        let email: String
        let nsclips: Int
        let cnclips: Int
        let uuid: String
    }

