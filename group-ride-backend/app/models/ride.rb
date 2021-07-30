class Ride < ApplicationRecord
    belongs_to :user
    has_many :signups 
    has_many :added_users, through: :signups, source: :user

    #add validations here
end
