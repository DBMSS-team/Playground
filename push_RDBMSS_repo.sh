## Make sure you are in parent directory (containing all this repos)
## And you have already set-upstream branches for your local branch in all of these repos

cd playground && git add . && git commit -m "files updated" && git push && cd ..
cd users && git add . && git commit -m "files updated" && git push && git pull && cd ..
cd support && git add . && git commit -m "files updated" && git push && git pull && cd ..
cd location && git add . && git commit -m "files updated" && git push && git pull && cd ..
cd store && git add . && git commit -m "files updated" && git push && git pull && cd ..
cd wallet && git add . && git commit -m "files updated" && git push && git pull && cd ..
cd payments && git add . && git commit -m "files updated" && git push && git pull && cd ..
cd orders && git add . && git commit -m "files updated" && git push && git pull && cd ..
cd cart && git add . && git commit -m "files updated" && git push && git pull && cd ..
cd products && git add . && git commit -m "files updated" && git push && git pull && cd ..
cd login && git add . && git commit -m "files updated" && git push && git pull && cd ..
