class UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            session[:user_id] = @user.id 
            render json: UserSerializer.new(@user).serializable_hash.to_json
        else 
            response = {
                error: @user.errors.full_messages.to_sentence
            }
            render json: response 
        end 
    end 

    def user_params
        params.require(:user).permit(:email, :username, :password)
    end 
end
