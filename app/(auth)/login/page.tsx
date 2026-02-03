import LoginWithGithub from '@/shared/LoginWithGithub';

const LoginPage = () => {
  return (
    <div className='flex flex-col mx-auto max-w-md gap-6 p-20 text-center bg-white rounded-lg mt-30 shadow-2xl'>
      <h1 className='text-4xl font-bold text-red-600'>Giriş Yap</h1>
      <p className='text-lg font-medium text-gray-600'>
        GitHub hesabınızla giriş yapabilirsiniz.
      </p>
      <p>Merhaba, TGB’ye giriş yap veya hesap oluştur, indirimleri kaçırma!</p>
      <LoginWithGithub />
    </div>
  );
};

export default LoginPage;
