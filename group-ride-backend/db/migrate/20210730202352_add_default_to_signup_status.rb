class AddDefaultToSignupStatus < ActiveRecord::Migration[6.1]
  def change
    change_column_default :signups, :status, false
  end
end
