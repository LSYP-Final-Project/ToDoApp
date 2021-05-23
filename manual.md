0. npm i
1. git checkout master 
2. git pull
3. git checkout -b "#numerIssue/nazwa-brancha-powiazana-z-nazwa-taska" - Przełącza na brancha o nazwie "#numerIssue/nazwa-brancha-powiazana-z-nazwa-taska"
4. czary mary developement
5. git add .
6. git commit -m "#numerIssue krotki-opis-co-zrobilismy"
7. git push, za pierwszym razem git push --set-upstream origin nazwa-brancha
8. po spushowaniu zmian wchodzimy na [github naszego repo](https://github.com/LSYP-Final-Project/ToDoApp)
9. Tworzymy pull request, przypisujemy wszystkich w grupie do CR, po otrzymaniu dwoch CRek mergujemy do mastera
10. Test

### uruchomienie środowiska
jeśli nie znajdujemy sie w folderze app, to w terminalu `cd app` i następnie
`json-server --watch data.json --port 3030` //odpalenia json-server na porcie 3030
`npm start`