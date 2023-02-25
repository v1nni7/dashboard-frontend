function Create() {
  return (
    <form className="form-horizontal">
      <div className="form-group">
        <label htmlFor="">Name</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="">Email</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="">Password</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="">Confirm Password</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="">CPF</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="">Phone</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="">Address</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="">Role</label>
        <input type="text" className="form-control" />
      </div>
    </form>
  );
}

export default Create;
