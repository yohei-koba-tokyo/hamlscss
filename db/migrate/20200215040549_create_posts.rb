class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :message
      t.timestamps
      t.references :user, foreign_key: true
    end
  end
end