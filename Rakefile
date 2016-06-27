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
end
