class CreateStudents < ActiveRecord::Migration
  def change
    create_table :students do |t|
      t.string :name
      t.string :surname
      t.string :gender
      t.integer :date
      t.string :skype
      t.string :group

      t.timestamps
    end
  end
end
