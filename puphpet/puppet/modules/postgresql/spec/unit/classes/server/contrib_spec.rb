require 'spec_helper'

describe 'postgresql::server::contrib', :type => :class do
  let :pre_condition do
    "class { 'postgresql::server': }"
  end

  let :facts do
    {
      :osfamily => 'Debian',
      :operatingsystem => 'Debian',
      :operatingsystemrelease => '6.0',
      :kernel => 'Linux',
      :concat_basedir => tmpfilename('contrib'),
      :id => 'root',
      :path => '/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin',
    }
  end

  describe 'with parameters' do
    let(:params) do
      {
        :package_name => 'mypackage',
        :package_ensure => 'absent',
      }
    end

    it 'should create package with correct params' do
      is_expected.to contain_package('postgresql-contrib').with({
        :ensure => 'absent',
        :name => 'mypackage',
        :tag => 'postgresql',
      })
    end
  end

  describe 'with no parameters' do
    it 'should create package with postgresql tag' do
      is_expected.to contain_package('postgresql-contrib').with({
        :tag => 'postgresql',
      })
    end
  end
end
