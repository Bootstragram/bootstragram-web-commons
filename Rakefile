namespace :bootstragram do
  desc "Transform an image into a valid jumbotron image"
  task :jumbotron_image, [:source_image] do |t, args|
    destination_image = File.basename(args[:source_image], File.extname(args[:source_image])) + "-transformed.png"
    # The values should be adjusted from 25,55 to whatever feels good!
    `convert #{args[:source_image]} -colorspace gray +level 15%,40% #{destination_image}`
  end
end
