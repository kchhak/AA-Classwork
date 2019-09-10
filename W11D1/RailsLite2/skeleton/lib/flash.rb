require 'json'

class Flash

    def initialize(req)
        cookie = req.cookies["_rails_lite_app_flash"]
            # debugger
        if cookie
            @now = JSON.parse(cookie)
        else
            @now = {}
        end
        @cookie_val = {}
    end

    def [](key)
        @cookie_val[key.to_s] || @now[key.to_s]
    end

    def []=(key, val)
        @cookie_val[key] = val
    end

  # serialize the hash into json and save in a cookie
  # add to the responses cookies
    def store_flash(res)
        res.set_cookie("_rails_lite_app_flash", { path: "/", value: @cookie_val.to_json })
    end

    def now 
        @now
    end
end
