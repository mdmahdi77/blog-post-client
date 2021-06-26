import React from 'react';
import { toast } from 'react-toastify';

const EditPostList = (props) => {
    const { title, _id, category } = props.blog

    const deleteBlogPost = (id, e) => {
        fetch(`https://infinite-escarpment-78018.herokuapp.com/delete/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(result => {
                if(result){
                    alert("Deleted Successfully")
                }
                e.preventDefault()
            })
    }
    return (
        <div className="col-lg-8 offset-lg-2">
            <table class="table">
                <tbody>
                    <tr className="d-flex justify-content-between align-items-center">
                        <div className="">
                            <td className="text-dark fw-bolder">{props.index + 1}.</td>
                            <td className="text-primary">{title}</td>
                        </div>
                        <div className="">
                            <td className="text-info">Category: ({category})</td>
                        </div>
                        <div className="updateDelete">
                            <td>
                                <button className="btn btn-danger btn-rounded" onClick={() => deleteBlogPost(_id)}>Delete</button>
                            </td>
                        </div>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default EditPostList;