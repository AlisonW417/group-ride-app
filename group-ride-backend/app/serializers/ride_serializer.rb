class RideSerializer
    include JSONAPI::Serializer

    attributes :name, :starting_location, :starting_time, :date, :level, :distance, :description, :user_id
    belongs_to :user, serializer: UserSerializer
end 