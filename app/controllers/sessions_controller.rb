class SessionsController < ApplicationController
    skip_before_action :authorized, only: [:create]
    def create
        user = User.find_by(user_name: params[:user_name])
        if user&.authenticate(params[:password])
            render json: user
        else
            render json: {error: "invalid username and password"}
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end
end
