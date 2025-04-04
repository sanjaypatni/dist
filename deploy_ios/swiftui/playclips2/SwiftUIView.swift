//
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
    }
}

struct SplashScreenView_Previews: PreviewProvider {
    @available(iOS 13.0, *)
    static var previews: some View {
        SwiftUIView()
    }
}
