class ProductsController < ApplicationController
     before_action :find_product, only: %i[show edit update destroy]

  def index
    @products = Product.all
  end

  def edit
  end

  def create
    @product = Product.new(product_params)
    if @product.save
      flash[:success] = 'The product was created!'
      redirect_to products_path
    else
      flash[:errors] = @product.errors.full_messages
      redirect_to products_path
    end
  end

  def show
  end

  def update
    if @product.update(product_params)
      flash[:success] = 'Update successful'
      redirect_to update_path(@product.id)
    else
      flash[:errors] = @product.errors.full_messages
      redirect_to edit_path(@product.id)
    end
  end

  def destroy
    @product.destroy
    flash[:success] = 'Product deleted'
    redirect_to products_path
  end

  private

  def product_params
    params.permit(:stock_id, :product_name, :product_price, :serial_number)
  end

  def find_product
    @product = Product.find(params[:id])
  end
end
