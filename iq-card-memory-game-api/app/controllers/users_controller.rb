class UsersController < ApplicationController
    def index
        users = User.all
        render json: users, include: [:iqs]
    end

    def create
        render json: User.create(username: params[:username]), status: :created
    end

    def show
        user = User.find_by(id: params[:id])
        render json: UserSerializer.new(user).to_serialized_json
    end

    private

    def user_params
        params.require(:user).permit(:username)
    end
end