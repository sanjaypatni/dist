import SwiftUI

struct TabScreen: View {
    var body: some View {
        TabView{
             Text("Assets")
                .tabItem {
                    Image(systemName: "tray.full.fill")
                    Text("Assets")
                }
            Text("Likes")
                .tabItem {
                    Image(systemName: "hand.thumbsup.fill")
                    Text("Likes")
                }
            Text("Core")
                .tabItem {
                    Image(systemName: "baseball.diamond.bases")
                    Text("Core")
                }
            Text("Playclips")
                .tabItem {
                    Image(systemName: "link.circle.fill")
                    Text("Playclips")
                }
        }
    }
}

struct TabView_Previews: PreviewProvider {
    static var previews: some View {
        TabScreen()
    }
}
