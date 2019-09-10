class Static
  attr_reader :app
    
    def initialize(app)
      @app = app
    end

    def call(env)
        @app.call(env)
        ['200', {'Content-type' => 'image/jpeg'}, ['/lib/public']]
    end
end

  
  # def initialize(app, path, cache_control=nil)
  #   @app = app
  #   @file_handler = FileHandler.new(path, cache_control)
  # end

  File::read