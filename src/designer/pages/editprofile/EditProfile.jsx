import React from 'react'
import Styles from './editprofile.module.scss'
import Sidebar from '../../components/sidebar/Sidebar'


const EditProfile = () => {
  return (
    <div>
        <div className={Styles.editprofile}>
          <div className={Styles.sidebar}>
            <Sidebar/>
            </div>
          
            <div className={Styles.profile}>
            <div className={Styles.heading}>
              <h2>Edit Profile</h2>
            </div>
            
                <div className={Styles.fields}>
                        <div className={Styles.field}>
                          <input type='text' name='name' id='name' placeholder='Enter name' className={Styles.name}/></div>
                          <div className={Styles.field}>
                          <input type='text' name='bio' id='bio' placeholder='Enter bio' className={Styles.bio}/></div>
                          <div className={Styles.field}>
                          <input type='text' name='contact' id='contact' placeholder='Enter contact' className={Styles.contact}/></div>
                          <div className={Styles.field}>
                          <input type='email' name='email' id='email' placeholder='Enter email' className={Styles.email}/></div>
                          <div className={Styles.field}>
                          <input type='password' name='password' placeholder='Enter password' className={Styles.password}/> 
                
                        </div>
                      </div><br/>
                       <div className={Styles.btn}>
                              <input type='submit' name='editprofile' id='editprofile' value='Save'
                               className={Styles.submit}/>
                            </div>
            </div>
        </div>
    </div>
  )
}

export default EditProfile