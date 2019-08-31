# == Schema Information
#
# Table name: albums
#
#  id         :bigint           not null, primary key
#  band_id    :integer          not null
#  title      :string           not null
#  year       :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  album_type :string           not null
#

class Album < ApplicationRecord
  validates :title, :year, presence: true
  validates :album_type, inclusion: ["Studio", "Live"]

  belongs_to :band
  has_many :tracks,
    dependent: :destroy

  def band_name
    band.name
  end

end
