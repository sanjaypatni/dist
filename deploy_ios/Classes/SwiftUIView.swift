//  SwiftUIView.swift
//  playclips
//
//  Created by Sanjay Patni on 08/04/23.
//

import SwiftUI
@available(iOS 13.0, *)
@available(iOS 13.0, *)
@available(iOS 13.0, *)
struct SwiftUIView: View {

    @State var isActive: Bool = false
    @State private var size = 0.7
    @State private var opacity = 0.4

    var contents: [ContentModel] = [];

    var body: some View {
        if isActive {
            // ContentView()
        } else {
            VStack{
                Image("logo")
                Text("Playclips")
                    .font(.system(size: 40))
                    .foregroundColor(.black)
                    .opacity(0.7)
            }
            .scaleEffect(size)
            .opacity(opacity)
            .onAppear{
                withAnimation(.easeIn(duration: 1.0)){
                    self.size = 1.1
                    self.opacity = 1.0
                }
            }
            .onAppear{
                DispatchQueue.main.asyncAfter(deadline: .now() + 1.5){
                    withAnimation{
                        self.isActive = true
                    }
                }
            }
        }
        /****
        Button {
                    Task {
                        let (data, _) = try await URLSession.shared.data(from: URL(string:"http://localhost:8095/content/content?login=" + "assets/img/demo.png")!)
                        let contents = try? JSONDecoder().decode([ContentModel].self, from: data)
                        print (contents ?? "")
                    }
                } label: {
                    Text("Fetch contents")
                }

    }
    ***/

         
        Button {
                        Task {
                            guard let url =  URL(string: "http://localhost:8095/api/authenticate")
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

                            }.resume()

                        }
                    } label: {
                        Text("Fetch token")
                    }

        }
    }


struct SplashScreenView_Previews: PreviewProvider {
            @available(iOS 13.0, *)
            static var previews: some View {
                SwiftUIView()
            }
}


struct ContentModel: Codable {
            let title: String
            let phone: String
            let email: String
}
struct TokenModel: Codable {
            let token: String
}
struct UserModel: Codable {
    var username: String
    var password: String
}


