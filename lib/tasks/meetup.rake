namespace :meetup do
  desc "Oath Meetup"
  task :oath => :environment do
    require "meetup"
    Meetup.new().doit
  end
end