# == Schema Information
#
# Table name: tracks
#
#  id         :bigint           not null, primary key
#  album_id   :integer          not null
#  title      :string           not null
#  ord        :integer          not null
#  lyrics     :text
#  track_type :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Track < ApplicationRecord
  validates :ord, presence: true
  validates :title, uniqueness: {scope: :album_id}
  validates :track_type, inclusion: ["Regular","Bonus"]

  belongs_to :album

  has_one :band,
    through: :album,
    source: :band
    
end
