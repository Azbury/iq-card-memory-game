class CreateIqs < ActiveRecord::Migration[6.0]
    def change
        create_table :iqs do |t|
            t.integer :iq
            t.integer :user_id
            t.timestamps null: false
        end
    end
end