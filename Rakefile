namespace :bootstragram do
  desc "Transform an image into a valid jumbotron image"
  task :jumbotron_image, [:source_image] do |t, args|
    destination_image = File.basename(args[:source_image], File.extname(args[:source_image])) + "-transformed.png"
    # The values should be adjusted from 25,55 to whatever feels good!
    `convert #{args[:source_image]} -colorspace gray +level 15%,40% #{destination_image}`

    # Other options:
    # convert england-record-goalscorer-wayne-rooney.jpg -colorspace gray +level -20%,120% +level-colors "#B72C0D","#E1E9EE" rooney.jpg
    # convert 000_BW15O.jpeg -colorspace gray +level -20%,120% +level-colors "#20509B","#E3CECD" iceland.jpg
  end

  desc "Create a C2A demo page"
  task :c2a_compile do |t|
    liquid_template = File.open("_liquid/call-to-action/call-to-action-template.html").read
    puts liquid_template
  end

  desc "Create directories"
  task :create_dir do
    sh "git clone -b gh-pages https://github.com/Bootstragram/bootstragram-web-commons.git ~/Developer/build/bootstragram-web-commons-gh-pages"
    sh "mkdir -p ~/Developer/build/bootstragram-web-commons-pow"
    sh "ln -Ffvs ~/Developer/build/bootstragram-web-commons-gh-pages ~/Developer/build/bootstragram-web-commons-pow/public"
    sh "cd ~/.pow && ln -s ~/Developer/build/bootstragram-web-commons-pow bootstragram-web-commons"
  end

  desc "Generate documentation"
  task :jsdoc do
    sh "jsdoc -c jsdoc.json -t ./node_modules/ink-docstrap/template -R jsdoc-README.md -r ~/Developer/build/bootstragram-web-commons-gh-pages/"
  end
end
