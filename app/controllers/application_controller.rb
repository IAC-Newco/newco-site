class ApplicationController < ActionController::Base
  before_action :basic_auth

  # Allows sitewide basic auth to be enabled via environment variables.
  def basic_auth
    if ENV['BASIC_AUTH_ACTIVATED'] && ENV['BASIC_AUTH_ACTIVATED'].downcase == "true"
      authenticate_or_request_with_http_basic('Dev Access') do |username, password|
        username == ENV['BASIC_AUTH_USERNAME']
        password == ENV['BASIC_AUTH_PASSWORD']
      end
    end
  end
end
