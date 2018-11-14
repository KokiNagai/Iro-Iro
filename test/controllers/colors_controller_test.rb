require 'test_helper'

class ColorsControllerTest < ActionDispatch::IntegrationTest
  test "should get red" do
    get colors_red_url
    assert_response :success
  end

  test "should get blue" do
    get colors_blue_url
    assert_response :success
  end

  test "should get green" do
    get colors_green_url
    assert_response :success
  end

end
