require "test_helper"

class StaticPagesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get static_pages_index_url
    assert_response :success
  end

  test "should get entrainement" do
    get static_pages_entrainement_url
    assert_response :success
  end

  test "should get exercice1" do
    get static_pages_exercice1_url
    assert_response :success
  end

  test "should get exercice2" do
    get static_pages_exercice2_url
    assert_response :success
  end
end
