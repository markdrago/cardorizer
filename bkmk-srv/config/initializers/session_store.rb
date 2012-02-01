# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_bkmk-srv_session',
  :secret      => '67e78882f717e72a2a069caa7be3783046554e0337b0f4e27c5c681cc808015fbdb3e2358724d1869e814754bac8c93f845bd3ef337cd3f5cb1c14560109cf01'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
