class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.belongs_to :stock
      t.string :product_name
      t.decimal :product_price, precision: 15, scale: 2, default: 0
      t.string :serial_number
      t.timestamps
    end
  end
end