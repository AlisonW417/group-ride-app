class RidesController < ApplicationController
    def create 
        #byebug
        @ride = current_user.rides.build(ride_params)
        if @ride.save 
            render json: RideSerializer.new(@ride).serializable_hash.to_json
        else 
            response = {
                error: @ride.errors.full_messages.to_string
            }
            render json: response
        end 
    end 

    private 
    def ride_params
        params.require(:ride).permit(:name, :starting_location, :starting_time, :date, :level, :distance, :description, :user_id)
    end 
end
