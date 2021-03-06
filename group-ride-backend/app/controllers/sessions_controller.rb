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

    def get_current_user
        if logged_in? 
            render json: UserSerializer.new(current_user).serializable_hash.to_json
        else 
            render json: {
                error: "No logged in users"
            }
        end 
    end 

    def destroy
        session.clear
        render json: {
            message: "Logged out"
        }
    end 
end
