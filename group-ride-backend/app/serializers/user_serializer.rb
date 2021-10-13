class UserSerializer
    include JSONAPI::Serializer

    attributes :email, :username
    has_many :rides, serializer: RideSerializer
end 