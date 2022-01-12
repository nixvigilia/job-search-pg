class AddPersonasToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :job_seeker, :boolean, default: false
    add_column :users, :employer, :boolean, default: false
  end
end
