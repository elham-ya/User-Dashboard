const NavigationMenu = () => {
  const handleClickIdentity = () => {
    console.log("identity component");
  };

  return (
    <div className="nav w-1/5 text-right">
      <div onClick={handleClickIdentity} className="border">
        مشخصات
      </div>
      <div className="border">آدرس</div>
      <div className="border">سفارشات</div>
      <div className="border">نظرات</div>
    </div>
  );
};

export default NavigationMenu;
