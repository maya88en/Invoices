class CreateStocks < ActiveRecord::Migration[5.1]
  def change
    create_table :stocks do |t|
      t.references :product, foreign_key: true, index: true
      t.integer :serial_number

      t.timestamps
    end
  end
end
