# == Schema Information
#
# Table name: artworks
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  image_url  :string           not null
#  artist_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Artwork < ApplicationRecord
  validates :title, presence: true
  validates :title, uniqueness: {scope: :artist_id}

  belongs_to :artist,
    class_name: :User,
    foreign_key: :artist_id

  has_many :shares,
   class_name: :ArtworkShare,
   foreign_key: :artwork_id

  has_many :shared_viewers,
   through: :shares,
    source: :viewer
end
