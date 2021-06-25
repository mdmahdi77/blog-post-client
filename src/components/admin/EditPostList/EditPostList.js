import React from 'react';
import { toast } from 'react-toastify';

const EditPostList = (props) => {
    const { title, _id, category } = props.blog

    const deleteBlogPost = (id, e) => {
        fetch(`http://localhost:7000/delete/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(result => {
                if(result){
                    alert("Deleted Successfully")
                    props.getBlog()
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
                        <td className="text-info">Category: ({category})</td>
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