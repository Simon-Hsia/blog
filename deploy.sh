set -e

npm run docs:build

cd src/.vuepress/dist

git init
git add .
git commit -m 'deploy'

git push -f git@github.com:Simon-Hsia/blog.git master:gh-pages

cd -