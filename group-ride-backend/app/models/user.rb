class User < ApplicationRecord
    has_secure_password
    has_many :rides
    has_many :signups
    has_many :added_rides, through: :signups, source: :ride

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true 
end
