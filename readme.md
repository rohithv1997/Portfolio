// Obsolete
Steps followed to create Github page hosted at https://rohithv1997.github.io/Portfolio:

Refer : https://medium.com/@saikiran1298/how-to-host-an-angular-app-to-github-pages-ef1900f88aa2

Run below commands before pushing to remote

* ng build --prod=true --outputPath="../docs" --baseHref=/Portfolio/

* git add .

* git commit 

* git push -u origin main

// Firebase deploy

run : npm run dev:ssr

run : firebase deploy