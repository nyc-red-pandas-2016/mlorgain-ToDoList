module UsersHelper

  def current_user
    @current_user ||= session[:user_id]
  end

  def logged_in?
    !!current_user
  end

end
