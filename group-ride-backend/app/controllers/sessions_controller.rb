class SessionsController < ApplicationController
    def create 
        # byebug
        @user = User.find_by(username: params[:session][:username])

        if @user && @user.authenticate(params[:session][:password])
            session[:user_id] = @user.id 
            render json: UserSerializer.new(@user).serializable_hash.to_json
        else 
            render json: {
                error: "Invalid Login Information"
            }
        end
    end 

    def destroy
        session.clear
        reander json: {
            message: "Logged out"
        }
    end 
end
