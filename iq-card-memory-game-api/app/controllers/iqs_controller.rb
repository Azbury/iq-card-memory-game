class IqsController < ApplicationController
    def create
        render json: Iq.create(iq: params[:iq], user_id: params[:user_id])
    end

    private

    def score_params
        params.require(:iq).permit(:iq, :user_id)
    end
end