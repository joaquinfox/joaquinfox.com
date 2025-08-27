How to update
From client
- md to src/blog
- git add/commit/push origin
 To preview locally
- npm rebuild
- npm start


From server:
- git pull
- npm run build
- sudo rsync -a --delete ~/web-content/joaquinfox.com/output/ /var/www/joaquinfox.com ->  the delete keeps the docroot an exact mirror of output/

Note: do NOT use sudo!!! This will change file owershipt to root, which breaks. To fix:
- sudo chown -R www-data:www-data /var/www/html/



* `git pull`: gets the latest source
* `npm run build`: generates fresh HTML/CSS from templates
* `rsync`: syncs built files to your live server directory
* `chown`: ensures web server owns the files (skip if ownership never changes)




