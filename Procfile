web: jemalloc.sh bundle exec puma -p $PORT -C ./config/puma.rb
client: sh -c 'rm -rf public/packs/* || true && bundle exec rake react_on_rails:locale && bin/webpacker'
