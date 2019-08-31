class ChangeAlbumColumns < ActiveRecord::Migration[6.0]
  def change
    remove_column :albums, :type
    add_column :albums, :album_type, :string, :null => false
  end
end
