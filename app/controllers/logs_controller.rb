class LogsController < ApplicationController
  # GET /logs
  # GET /logs.json
  def index
    @log = `tail log/development.log`

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: [@log] }
    end
  end
end
