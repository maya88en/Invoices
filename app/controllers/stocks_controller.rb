class StocksController < ApplicationController
    before_action :find_stock, only: %i[show edit update destroy]

  def index
    @stocks = Stock.all
  end

  def new
    @stock = Stock.new
  end

  def show
  end

  def edit
  end

  def create
    @stock = Stock.new(stock_params)
    if @stock.save
      flash[:success] = 'The stock item was created!'
      redirect_to stocks_path
    else
      flash[:errors] = @stock.errors.full_messages
      redirect_to stocks_path
    end
  end


  def destroy
    @stock.destroy
    flash[:success] = 'Stock deleted'
    redirect_to stocks_path
  end


  private

  def product_params
    params.permit(:name)
  end

  def find_stock
    @stock = Stock.find(params[:id])
  end
end
