class CreateStocks < ActiveRecord::Migration[5.1]
  def change
    create_table :stocks do |t|
      t.integer :product_id
      t.integer :serial_number

      t.timestamps
    end
  end
end
